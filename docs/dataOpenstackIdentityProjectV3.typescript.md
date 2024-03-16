# `dataOpenstackIdentityProjectV3` Submodule <a name="`dataOpenstackIdentityProjectV3` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackIdentityProjectV3 <a name="DataOpenstackIdentityProjectV3" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3 openstack_identity_project_v3}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer"></a>

```typescript
import { dataOpenstackIdentityProjectV3 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3(scope: Construct, id: string, config?: DataOpenstackIdentityProjectV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config">DataOpenstackIdentityProjectV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config">DataOpenstackIdentityProjectV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetDomainId">resetDomainId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetIsDomain">resetIsDomain</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetParentId">resetParentId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDomainId` <a name="resetDomainId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetDomainId"></a>

```typescript
public resetDomainId(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsDomain` <a name="resetIsDomain" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetIsDomain"></a>

```typescript
public resetIsDomain(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParentId` <a name="resetParentId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetParentId"></a>

```typescript
public resetParentId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackIdentityProjectV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isConstruct"></a>

```typescript
import { dataOpenstackIdentityProjectV3 } from '@ithings/cdktf-provider-openstack'

dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isTerraformElement"></a>

```typescript
import { dataOpenstackIdentityProjectV3 } from '@ithings/cdktf-provider-openstack'

dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isTerraformDataSource"></a>

```typescript
import { dataOpenstackIdentityProjectV3 } from '@ithings/cdktf-provider-openstack'

dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.generateConfigForImport"></a>

```typescript
import { dataOpenstackIdentityProjectV3 } from '@ithings/cdktf-provider-openstack'

dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackIdentityProjectV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackIdentityProjectV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackIdentityProjectV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackIdentityProjectV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.isDomainInput">isDomainInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.isDomain">isDomain</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isDomainInput`<sup>Optional</sup> <a name="isDomainInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.isDomainInput"></a>

```typescript
public readonly isDomainInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDomain`<sup>Required</sup> <a name="isDomain" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.isDomain"></a>

```typescript
public readonly isDomain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackIdentityProjectV3Config <a name="DataOpenstackIdentityProjectV3Config" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.Initializer"></a>

```typescript
import { dataOpenstackIdentityProjectV3 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackIdentityProjectV3Config: dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.domainId">domainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#domain_id DataOpenstackIdentityProjectV3#domain_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#enabled DataOpenstackIdentityProjectV3#enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#id DataOpenstackIdentityProjectV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.isDomain">isDomain</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#is_domain DataOpenstackIdentityProjectV3#is_domain}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#name DataOpenstackIdentityProjectV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.parentId">parentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#parent_id DataOpenstackIdentityProjectV3#parent_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#project_id DataOpenstackIdentityProjectV3#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#region DataOpenstackIdentityProjectV3#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#domain_id DataOpenstackIdentityProjectV3#domain_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#enabled DataOpenstackIdentityProjectV3#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#id DataOpenstackIdentityProjectV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDomain`<sup>Optional</sup> <a name="isDomain" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.isDomain"></a>

```typescript
public readonly isDomain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#is_domain DataOpenstackIdentityProjectV3#is_domain}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#name DataOpenstackIdentityProjectV3#name}.

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#parent_id DataOpenstackIdentityProjectV3#parent_id}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#project_id DataOpenstackIdentityProjectV3#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#region DataOpenstackIdentityProjectV3#region}.

---




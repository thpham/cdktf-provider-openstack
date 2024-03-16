# `dataOpenstackIdentityAuthScopeV3` Submodule <a name="`dataOpenstackIdentityAuthScopeV3` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackIdentityAuthScopeV3 <a name="DataOpenstackIdentityAuthScopeV3" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3 openstack_identity_auth_scope_v3}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer"></a>

```typescript
import { dataOpenstackIdentityAuthScopeV3 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3(scope: Construct, id: string, config: DataOpenstackIdentityAuthScopeV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config">DataOpenstackIdentityAuthScopeV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config">DataOpenstackIdentityAuthScopeV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.resetSetTokenId">resetSetTokenId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSetTokenId` <a name="resetSetTokenId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.resetSetTokenId"></a>

```typescript
public resetSetTokenId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackIdentityAuthScopeV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isConstruct"></a>

```typescript
import { dataOpenstackIdentityAuthScopeV3 } from '@ithings/cdktf-provider-openstack'

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isTerraformElement"></a>

```typescript
import { dataOpenstackIdentityAuthScopeV3 } from '@ithings/cdktf-provider-openstack'

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isTerraformDataSource"></a>

```typescript
import { dataOpenstackIdentityAuthScopeV3 } from '@ithings/cdktf-provider-openstack'

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.generateConfigForImport"></a>

```typescript
import { dataOpenstackIdentityAuthScopeV3 } from '@ithings/cdktf-provider-openstack'

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackIdentityAuthScopeV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackIdentityAuthScopeV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackIdentityAuthScopeV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackIdentityAuthScopeV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.projectDomainId">projectDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.projectDomainName">projectDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.projectName">projectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.roles">roles</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList">DataOpenstackIdentityAuthScopeV3RolesList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.serviceCatalog">serviceCatalog</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList">DataOpenstackIdentityAuthScopeV3ServiceCatalogList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.tokenId">tokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.userDomainId">userDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.userDomainName">userDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.setTokenIdInput">setTokenIdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.setTokenId">setTokenId</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `projectDomainId`<sup>Required</sup> <a name="projectDomainId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.projectDomainId"></a>

```typescript
public readonly projectDomainId: string;
```

- *Type:* string

---

##### `projectDomainName`<sup>Required</sup> <a name="projectDomainName" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.projectDomainName"></a>

```typescript
public readonly projectDomainName: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.roles"></a>

```typescript
public readonly roles: DataOpenstackIdentityAuthScopeV3RolesList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList">DataOpenstackIdentityAuthScopeV3RolesList</a>

---

##### `serviceCatalog`<sup>Required</sup> <a name="serviceCatalog" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.serviceCatalog"></a>

```typescript
public readonly serviceCatalog: DataOpenstackIdentityAuthScopeV3ServiceCatalogList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList">DataOpenstackIdentityAuthScopeV3ServiceCatalogList</a>

---

##### `tokenId`<sup>Required</sup> <a name="tokenId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.tokenId"></a>

```typescript
public readonly tokenId: string;
```

- *Type:* string

---

##### `userDomainId`<sup>Required</sup> <a name="userDomainId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.userDomainId"></a>

```typescript
public readonly userDomainId: string;
```

- *Type:* string

---

##### `userDomainName`<sup>Required</sup> <a name="userDomainName" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.userDomainName"></a>

```typescript
public readonly userDomainName: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `setTokenIdInput`<sup>Optional</sup> <a name="setTokenIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.setTokenIdInput"></a>

```typescript
public readonly setTokenIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `setTokenId`<sup>Required</sup> <a name="setTokenId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.setTokenId"></a>

```typescript
public readonly setTokenId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackIdentityAuthScopeV3Config <a name="DataOpenstackIdentityAuthScopeV3Config" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.Initializer"></a>

```typescript
import { dataOpenstackIdentityAuthScopeV3 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackIdentityAuthScopeV3Config: dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#name DataOpenstackIdentityAuthScopeV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#id DataOpenstackIdentityAuthScopeV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#region DataOpenstackIdentityAuthScopeV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.setTokenId">setTokenId</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#set_token_id DataOpenstackIdentityAuthScopeV3#set_token_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#name DataOpenstackIdentityAuthScopeV3#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#id DataOpenstackIdentityAuthScopeV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#region DataOpenstackIdentityAuthScopeV3#region}.

---

##### `setTokenId`<sup>Optional</sup> <a name="setTokenId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.setTokenId"></a>

```typescript
public readonly setTokenId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#set_token_id DataOpenstackIdentityAuthScopeV3#set_token_id}.

---

### DataOpenstackIdentityAuthScopeV3Roles <a name="DataOpenstackIdentityAuthScopeV3Roles" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Roles"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Roles.Initializer"></a>

```typescript
import { dataOpenstackIdentityAuthScopeV3 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackIdentityAuthScopeV3Roles: dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Roles = { ... }
```


### DataOpenstackIdentityAuthScopeV3ServiceCatalog <a name="DataOpenstackIdentityAuthScopeV3ServiceCatalog" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalog"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalog.Initializer"></a>

```typescript
import { dataOpenstackIdentityAuthScopeV3 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackIdentityAuthScopeV3ServiceCatalog: dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalog = { ... }
```


### DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints <a name="DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints.Initializer"></a>

```typescript
import { dataOpenstackIdentityAuthScopeV3 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints: dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpenstackIdentityAuthScopeV3RolesList <a name="DataOpenstackIdentityAuthScopeV3RolesList" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.Initializer"></a>

```typescript
import { dataOpenstackIdentityAuthScopeV3 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.get"></a>

```typescript
public get(index: number): DataOpenstackIdentityAuthScopeV3RolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpenstackIdentityAuthScopeV3RolesOutputReference <a name="DataOpenstackIdentityAuthScopeV3RolesOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.Initializer"></a>

```typescript
import { dataOpenstackIdentityAuthScopeV3 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Roles">DataOpenstackIdentityAuthScopeV3Roles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpenstackIdentityAuthScopeV3Roles;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Roles">DataOpenstackIdentityAuthScopeV3Roles</a>

---


### DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList <a name="DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.Initializer"></a>

```typescript
import { dataOpenstackIdentityAuthScopeV3 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.get"></a>

```typescript
public get(index: number): DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference <a name="DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.Initializer"></a>

```typescript
import { dataOpenstackIdentityAuthScopeV3 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.interface">interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.regionId">regionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints">DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interface`<sup>Required</sup> <a name="interface" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `regionId`<sup>Required</sup> <a name="regionId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.regionId"></a>

```typescript
public readonly regionId: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints">DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints</a>

---


### DataOpenstackIdentityAuthScopeV3ServiceCatalogList <a name="DataOpenstackIdentityAuthScopeV3ServiceCatalogList" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.Initializer"></a>

```typescript
import { dataOpenstackIdentityAuthScopeV3 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.get"></a>

```typescript
public get(index: number): DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference <a name="DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.Initializer"></a>

```typescript
import { dataOpenstackIdentityAuthScopeV3 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList">DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalog">DataOpenstackIdentityAuthScopeV3ServiceCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.endpoints"></a>

```typescript
public readonly endpoints: DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList">DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpenstackIdentityAuthScopeV3ServiceCatalog;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalog">DataOpenstackIdentityAuthScopeV3ServiceCatalog</a>

---




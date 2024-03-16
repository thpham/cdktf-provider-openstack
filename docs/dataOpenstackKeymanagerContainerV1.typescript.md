# `dataOpenstackKeymanagerContainerV1` Submodule <a name="`dataOpenstackKeymanagerContainerV1` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackKeymanagerContainerV1 <a name="DataOpenstackKeymanagerContainerV1" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1 openstack_keymanager_container_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1(scope: Construct, id: string, config?: DataOpenstackKeymanagerContainerV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config">DataOpenstackKeymanagerContainerV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config">DataOpenstackKeymanagerContainerV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackKeymanagerContainerV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isConstruct"></a>

```typescript
import { dataOpenstackKeymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isTerraformElement"></a>

```typescript
import { dataOpenstackKeymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isTerraformDataSource"></a>

```typescript
import { dataOpenstackKeymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.generateConfigForImport"></a>

```typescript
import { dataOpenstackKeymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackKeymanagerContainerV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackKeymanagerContainerV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackKeymanagerContainerV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackKeymanagerContainerV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.acl">acl</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList">DataOpenstackKeymanagerContainerV1AclList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.consumers">consumers</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList">DataOpenstackKeymanagerContainerV1ConsumersList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.containerRef">containerRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.creatorId">creatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.secretRefs">secretRefs</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList">DataOpenstackKeymanagerContainerV1SecretRefsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `acl`<sup>Required</sup> <a name="acl" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.acl"></a>

```typescript
public readonly acl: DataOpenstackKeymanagerContainerV1AclList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList">DataOpenstackKeymanagerContainerV1AclList</a>

---

##### `consumers`<sup>Required</sup> <a name="consumers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.consumers"></a>

```typescript
public readonly consumers: DataOpenstackKeymanagerContainerV1ConsumersList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList">DataOpenstackKeymanagerContainerV1ConsumersList</a>

---

##### `containerRef`<sup>Required</sup> <a name="containerRef" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.containerRef"></a>

```typescript
public readonly containerRef: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `creatorId`<sup>Required</sup> <a name="creatorId" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.creatorId"></a>

```typescript
public readonly creatorId: string;
```

- *Type:* string

---

##### `secretRefs`<sup>Required</sup> <a name="secretRefs" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.secretRefs"></a>

```typescript
public readonly secretRefs: DataOpenstackKeymanagerContainerV1SecretRefsList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList">DataOpenstackKeymanagerContainerV1SecretRefsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackKeymanagerContainerV1Acl <a name="DataOpenstackKeymanagerContainerV1Acl" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Acl"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Acl.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackKeymanagerContainerV1Acl: dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Acl = { ... }
```


### DataOpenstackKeymanagerContainerV1AclRead <a name="DataOpenstackKeymanagerContainerV1AclRead" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclRead"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclRead.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackKeymanagerContainerV1AclRead: dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclRead = { ... }
```


### DataOpenstackKeymanagerContainerV1Config <a name="DataOpenstackKeymanagerContainerV1Config" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackKeymanagerContainerV1Config: dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#id DataOpenstackKeymanagerContainerV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#name DataOpenstackKeymanagerContainerV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#region DataOpenstackKeymanagerContainerV1#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#id DataOpenstackKeymanagerContainerV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#name DataOpenstackKeymanagerContainerV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#region DataOpenstackKeymanagerContainerV1#region}.

---

### DataOpenstackKeymanagerContainerV1Consumers <a name="DataOpenstackKeymanagerContainerV1Consumers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Consumers"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Consumers.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackKeymanagerContainerV1Consumers: dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Consumers = { ... }
```


### DataOpenstackKeymanagerContainerV1SecretRefs <a name="DataOpenstackKeymanagerContainerV1SecretRefs" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefs"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefs.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackKeymanagerContainerV1SecretRefs: dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefs = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpenstackKeymanagerContainerV1AclList <a name="DataOpenstackKeymanagerContainerV1AclList" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.get"></a>

```typescript
public get(index: number): DataOpenstackKeymanagerContainerV1AclOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpenstackKeymanagerContainerV1AclOutputReference <a name="DataOpenstackKeymanagerContainerV1AclOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.property.read">read</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList">DataOpenstackKeymanagerContainerV1AclReadList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Acl">DataOpenstackKeymanagerContainerV1Acl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.property.read"></a>

```typescript
public readonly read: DataOpenstackKeymanagerContainerV1AclReadList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList">DataOpenstackKeymanagerContainerV1AclReadList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpenstackKeymanagerContainerV1Acl;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Acl">DataOpenstackKeymanagerContainerV1Acl</a>

---


### DataOpenstackKeymanagerContainerV1AclReadList <a name="DataOpenstackKeymanagerContainerV1AclReadList" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.get"></a>

```typescript
public get(index: number): DataOpenstackKeymanagerContainerV1AclReadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpenstackKeymanagerContainerV1AclReadOutputReference <a name="DataOpenstackKeymanagerContainerV1AclReadOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.projectAccess">projectAccess</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.users">users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclRead">DataOpenstackKeymanagerContainerV1AclRead</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `projectAccess`<sup>Required</sup> <a name="projectAccess" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.projectAccess"></a>

```typescript
public readonly projectAccess: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `users`<sup>Required</sup> <a name="users" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpenstackKeymanagerContainerV1AclRead;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclRead">DataOpenstackKeymanagerContainerV1AclRead</a>

---


### DataOpenstackKeymanagerContainerV1ConsumersList <a name="DataOpenstackKeymanagerContainerV1ConsumersList" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.get"></a>

```typescript
public get(index: number): DataOpenstackKeymanagerContainerV1ConsumersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpenstackKeymanagerContainerV1ConsumersOutputReference <a name="DataOpenstackKeymanagerContainerV1ConsumersOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Consumers">DataOpenstackKeymanagerContainerV1Consumers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpenstackKeymanagerContainerV1Consumers;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Consumers">DataOpenstackKeymanagerContainerV1Consumers</a>

---


### DataOpenstackKeymanagerContainerV1SecretRefsList <a name="DataOpenstackKeymanagerContainerV1SecretRefsList" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.get"></a>

```typescript
public get(index: number): DataOpenstackKeymanagerContainerV1SecretRefsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpenstackKeymanagerContainerV1SecretRefsOutputReference <a name="DataOpenstackKeymanagerContainerV1SecretRefsOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.secretRef">secretRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefs">DataOpenstackKeymanagerContainerV1SecretRefs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.secretRef"></a>

```typescript
public readonly secretRef: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpenstackKeymanagerContainerV1SecretRefs;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefs">DataOpenstackKeymanagerContainerV1SecretRefs</a>

---



